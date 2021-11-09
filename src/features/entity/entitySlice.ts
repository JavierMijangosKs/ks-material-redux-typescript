import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EntityModel, SchemaModel } from "models/entityModel";

interface EntityState {
  isLoadingEntities: boolean;
  isLoadingSchema: boolean;
  entityList: EntityModel[];
  schema?: SchemaModel;
  searchText: string;
  count: number;
  itemsPerPage: number;
  page: number;
  sort: [string, "ASC" | "DESC"][];
  selectedEntity: EntityModel | null;
}

const initialState: EntityState = {
  isLoadingEntities: false,
  isLoadingSchema: false,
  entityList: [],
  searchText: "",
  count: 0,
  itemsPerPage: 10,
  page: 1,
  sort: [],
  selectedEntity: null,
};

export const entitySlice = createSlice({
  name: "entity",
  initialState,
  reducers: {
    setIsLoadingEntities: (state, action: PayloadAction<boolean>) => {
      state.isLoadingEntities = action.payload;
    },
    setIsLoadingSchema: (state, action: PayloadAction<boolean>) => {
      state.isLoadingSchema = action.payload;
    },
    setEntityList: (state, action: PayloadAction<EntityModel[]>) => {
      state.entityList = action.payload;
    },
    setEntitySearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.page = 1;
    },
    setEntityCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setEntityPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setEntityPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setEntitySort: (
      state,
      action: PayloadAction<[string, "ASC" | "DESC"][]>
    ) => {
      state.sort = action.payload;
    },
    setSelectedEntity: (state, action: PayloadAction<EntityModel | null>) => {
      state.selectedEntity = action.payload;
    },
    setSchema: (state, action: PayloadAction<SchemaModel | undefined>) => {
      state.schema = action.payload;
    },
  },
});

export const {
  setIsLoadingEntities,
  setIsLoadingSchema,
  setEntityList,
  setEntitySearchText,
  setEntityCount,
  setEntityPerPage,
  setEntityPage,
  setEntitySort,
  setSelectedEntity,
  setSchema,
} = entitySlice.actions;

export const entityReducer = entitySlice.reducer;
