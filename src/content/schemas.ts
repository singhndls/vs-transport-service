import { z } from 'zod';
export const schemas = {
  pages: {
    loading_unloading: z.object({
      "hero": z.object({
        "badge": z.string(),
        "heading1": z.string(),
        "heading2": z.string(),
        "description": z.string(),
        "cta_whatsapp": z.string(),
        "cta_call": z.string()
      }),
      "features_heading1": z.string(),
      "features_heading2": z.string(),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "usecases_heading1": z.string(),
      "usecases_heading2": z.string(),
      "usecases_sub": z.string(),
      "usecases": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "why_heading1": z.string(),
      "why_heading2": z.string(),
      "why_points": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "cta_heading1": z.string(),
      "cta_heading2": z.string(),
      "cta_desc": z.string(),
      "cta_whatsapp": z.string(),
      "cta_call": z.string()
    }),
    bolero_pickup: z.object({
      "hero": z.object({
        "badge": z.string(),
        "heading1": z.string(),
        "heading2": z.string(),
        "description": z.string(),
        "ctaWhatsApp": z.string(),
        "ctaPhone": z.string()
      }),
      "features": z.object({
        "heading": z.string(),
        "headingHighlight": z.string(),
        "headingSuffix": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "desc": z.string()
        }))
      }),
      "useCases": z.object({
        "heading": z.string(),
        "headingHighlight": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        }))
      }),
      "cta": z.object({
        "heading": z.string(),
        "headingHighlight": z.string(),
        "headingSuffix": z.string(),
        "subtext": z.string(),
        "ctaWhatsApp": z.string(),
        "ctaPhone": z.string()
      })
    }),
    fleet_transport: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "industries": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      })
    }),
    okhla: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "whySection": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "whyPoints": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "areas": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      })),
      "warehouseAddress": z.string(),
      "cta": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      })
    }),
    delhi_ncr: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "zones": z.array(z.object({
        "id": z.string(),
        "zone": z.string(),
        "areas": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      })
    }),
    gurgaon: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "whySection": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "whyPoints": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "areas": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      })
    }),
    noida: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "whySection": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      }),
      "whyPoints": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "areas": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "headlineAccent": z.string(),
        "body": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;