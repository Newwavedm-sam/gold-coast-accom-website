import { notFound } from "next/navigation";

// The licensed inventory and availability live in Property Stack, not the
// presentation fixtures. Only restore detail routes for verified properties.
export default function PropertyPage() {
  notFound();
}
