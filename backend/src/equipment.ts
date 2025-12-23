// Define types, interfaces related to equipment management in the backend

export type BuildingType = 'Warehouse' | 'Classroom' | 'Office';

export interface Location {
  id: number;
  room_name: string;
  building_type: BuildingType;
  created_at: Date;
}

export interface Equipment {
  id: number;
  model: string;
  equipment_type: string;
  location_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface EquipmentWithLocation extends Equipment {
  room_name: string;
  building_type: BuildingType;
}

export interface NewEquipment {
  model: string;
  equipment_type: string;
  location_id: number;
}