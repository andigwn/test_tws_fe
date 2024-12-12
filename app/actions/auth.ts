

import { LoginRequest } from "@/app/types/auth"

export async function loginAction(data: LoginRequest) {
  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to login');
    }
    // validation user role
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to login');
    }
    

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Something went wrong');
  }
}