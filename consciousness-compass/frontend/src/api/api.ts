import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

// Types
export interface ResourceLink {
  id: number;
  subsection_id: number;
  title: string;
  url: string;
  description: string;
}

export interface Subsection {
  id: number;
  section_id: number;
  title: string;
  description: string;
  resource_links?: ResourceLink[];
}

export interface Section {
  id: number;
  title: string;
  description: string;
  subsections?: Subsection[];
}

// API functions
export const fetchSections = async (): Promise<Section[]> => {
  const response = await api.get('/sections');
  return response.data;
};

export const fetchSection = async (id: number): Promise<Section> => {
  const response = await api.get(`/sections/${id}`);
  return response.data;
};

export const fetchSubsections = async (sectionId?: number): Promise<Subsection[]> => {
  const url = sectionId ? `/sections/${sectionId}/subsections` : '/subsections';
  const response = await api.get(url);
  return response.data;
};

export const fetchSubsection = async (id: number): Promise<Subsection> => {
  const response = await api.get(`/subsections/${id}`);
  return response.data;
};

export const fetchResourceLinks = async (subsectionId?: number): Promise<ResourceLink[]> => {
  const url = subsectionId ? `/subsections/${subsectionId}/resource_links` : '/resource_links';
  const response = await api.get(url);
  return response.data;
};
