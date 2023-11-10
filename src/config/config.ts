const config = {
    appWriteURL: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appWriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appWriteDbId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appWriteCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
}

export default config