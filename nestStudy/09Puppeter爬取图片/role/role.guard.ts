import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
// 反射
import { Reflector } from '@nestjs/core';
import { Request, Response } from 'express';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private Reflector: Reflector) {

  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('接口守卫');
    const admin = this.Reflector.get<string[]>('role', context.getHandler()) || []
    console.log(admin, 'admin');
    const req = context.switchToHttp().getRequest<Request>()
    console.log(req.query.role);
    if (!req.query) {
      return false
    }
    const role = req.query.role as string
    return admin.includes(role);
  }
}
