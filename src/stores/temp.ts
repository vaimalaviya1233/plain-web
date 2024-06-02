import type { ISource } from '@/components/lightbox/types'
import type { IFile } from '@/lib/file'
import { defineStore } from 'pinia'
import type sjcl from 'sjcl'

export interface IUploadItem {
  dir: string
  fileName: string
  file: File
  uploadedSize: number
  status: string
  error: string
  xhr?: XMLHttpRequest
}

export interface ILightBox {
  sources: ISource[]
  visible: boolean
  index: number
}

export interface IDataCounter {
  messages: number
  contacts: number
  calls: number
  videos: number
  images: number
  audios: number
  packages: number
  packagesSystem: number
  notes: number
  notesTrash: number
  feedEntries: number
  feedEntriesToday: number
  total: number
  free: number
}

// data will be lost when page refreshed, or the data use different way to store data
export type TempState = {
  app: any // store the appFragment result
  urlTokenKey: sjcl.BitArray | null
  uploads: IUploadItem[]
  selectedFiles: IFile[]
  audioPlaying: boolean
  lightbox: ILightBox
  counter: IDataCounter
}

export const useTempStore = defineStore({
  id: 'temp',
  state: () =>
    ({
      app: null,
      urlTokenKey: null,
      uploads: [],
      selectedFiles: [],
      audioPlaying: false,
      lightbox: { sources: [], visible: false, index: -1 },
      counter: {
        messages: -1,
        contacts: -1,
        calls: -1,
        videos: -1,
        images: -1,
        audios: -1,
        packages: -1,
        packagesSystem: -1,
        notes: -1,
        notesTrash: -1,
        feedEntries: -1,
        feedEntriesToday: -1,
        total: -1,
        free: -1,
      },
    }) as TempState,
})
