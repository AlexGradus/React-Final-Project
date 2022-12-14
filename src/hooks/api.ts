import { api } from 'services';

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
  useGetAllBoardsQuery,
  useCreateBoardMutation,
  useGetBoardByIdQuery,
  useUpdateBoardByIdMutation,
  useDeleteBoardByIdMutation,
  useGetBoardsByIdListQuery,
  useGetBoardsByUserIdQuery,
  useGetColumnsInBoardQuery,
  useCreateColumnMutation,
  useGetColumnByIdQuery,
  useUpdateColumnByIdMutation,
  useDeleteColumnByIdMutation,
  useGetColumnsByParamsQuery,
  useUpdateSetOfColumnsMutation,
  useCreateSetOfColumnsMutation,
  useGetTasksInColumnQuery,
  useCreateTaskMutation,
  useGetTaskByIdQuery,
  useUpdateTaskByIdMutation,
  useDeleteTaskByIdMutation,
  useGetTasksByParamsQuery,
  useUpdateSetOfTasksMutation,
  useGetTasksByBoardIdQuery,
  useGetFilesByParamsQuery,
  useUploadFileMutation,
  useGetFilesByBoardIdQuery,
  useDeleteFileByIdMutation,
  useGetPointsByParamsQuery,
  useCreatePointMutation,
  useUpdateSetOfPointsMutation,
  useGetPointsByTaskIdQuery,
  useUpdatePointByIdMutation,
  useDeletePointByIdMutation,
} = api;
