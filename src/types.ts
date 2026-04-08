/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from "lucide-react";

export type View =
  | "dashboard"
  | "solicitudes"
  | "pasivos"
  | "caja"
  | "juridico"
  | "contratos"
  | "cotizaciones"
  | "polizas"
  | "cierre"
  | "cfdi"
  | "proveedores"
  | "empresas"
  | "usuarios"
  | "unidades"
  | "rentabilidad"
  | "almacenes"
  | "asistente_ia"
  | "banca_directa"
  | "portal_proveedores";

export interface NavItem {
  id: View;
  label: string;
  icon: LucideIcon;
  category?: string;
  badge?: string | number;
  badgeColor?: "red" | "amber" | "blue" | "teal";
}
