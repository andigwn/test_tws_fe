'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginRequest } from '@/app/types/auth';
import { loginAction } from '@/app/actions/auth';

export function useAuth() {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (data: LoginRequest) => {
    try {
      setIsLoading(true);
      setError('');
      
      const response = await loginAction(data);
      
      // Store token in localStorage
      localStorage.setItem('token', response.token);
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    error,
    isLoading
  };
}