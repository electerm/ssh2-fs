import type { Client } from 'ssh2'

export interface SshFsOptions {
}

export interface FileInfo {
  type: string
  name: string
  size: number
  modifyTime: number
  accessTime: number
  mode: number
  rights: {
    user: string
    group: string
    other: string
  }
  owner: number
  group: number
}

export interface Stats {
  isDirectory: () => boolean
  isFile: () => boolean
  isBlockDevice: () => boolean
  isCharacterDevice: () => boolean
  isSymbolicLink: () => boolean
  isFIFO: () => boolean
  isSocket: () => boolean
  size: number
  mode: number
  uid: number
  gid: number
  atime: number
  mtime: number
}

export type TransferType = 'download' | 'upload'

export interface TransferOptions {
  type: TransferType
  remotePath: string
  localPath: string
  chunkSize?: number
  onProgress?: (transferred: number, total: number) => void
  onData?: (count: number) => void
}

export interface TransferState {
  transferred: number
  total: number
  paused: boolean
  completed: boolean
  error?: Error
}

export class SshFs {
}

export function createSshFs(_session: Client, _options?: SshFsOptions): SshFs {
  return null as any
}
