export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          is_published: boolean | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          booking_status: string | null
          created_at: string
          customer_email: string
          customer_name: string
          customer_nationality: string | null
          customer_phone: string
          id: string
          number_of_adults: number | null
          number_of_children: number | null
          special_requests: string | null
          total_amount: number | null
          tour_date: string | null
          tour_id: string | null
          updated_at: string
        }
        Insert: {
          booking_status?: string | null
          created_at?: string
          customer_email: string
          customer_name: string
          customer_nationality?: string | null
          customer_phone: string
          id?: string
          number_of_adults?: number | null
          number_of_children?: number | null
          special_requests?: string | null
          total_amount?: number | null
          tour_date?: string | null
          tour_id?: string | null
          updated_at?: string
        }
        Update: {
          booking_status?: string | null
          created_at?: string
          customer_email?: string
          customer_name?: string
          customer_nationality?: string | null
          customer_phone?: string
          id?: string
          number_of_adults?: number | null
          number_of_children?: number | null
          special_requests?: string | null
          total_amount?: number | null
          tour_date?: string | null
          tour_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_tour_id_fkey"
            columns: ["tour_id"]
            isOneToOne: false
            referencedRelation: "tours"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_inquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          inquiry_type: string | null
          message: string
          name: string
          phone: string | null
          status: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          inquiry_type?: string | null
          message: string
          name: string
          phone?: string | null
          status?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          inquiry_type?: string | null
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          customer_location: string | null
          customer_name: string
          id: string
          is_approved: boolean | null
          is_featured: boolean | null
          rating: number | null
          review_text: string
          tour_taken: string | null
        }
        Insert: {
          created_at?: string
          customer_location?: string | null
          customer_name: string
          id?: string
          is_approved?: boolean | null
          is_featured?: boolean | null
          rating?: number | null
          review_text: string
          tour_taken?: string | null
        }
        Update: {
          created_at?: string
          customer_location?: string | null
          customer_name?: string
          id?: string
          is_approved?: boolean | null
          is_featured?: boolean | null
          rating?: number | null
          review_text?: string
          tour_taken?: string | null
        }
        Relationships: []
      }
      tours: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          duration: string | null
          exclusions: string[] | null
          gallery_images: string[] | null
          group_size: string | null
          id: string
          image_url: string | null
          inclusions: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          itinerary: Json | null
          location: string | null
          price: number | null
          short_description: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          duration?: string | null
          exclusions?: string[] | null
          gallery_images?: string[] | null
          group_size?: string | null
          id?: string
          image_url?: string | null
          inclusions?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          itinerary?: Json | null
          location?: string | null
          price?: number | null
          short_description?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          duration?: string | null
          exclusions?: string[] | null
          gallery_images?: string[] | null
          group_size?: string | null
          id?: string
          image_url?: string | null
          inclusions?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          itinerary?: Json | null
          location?: string | null
          price?: number | null
          short_description?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      visa_applications: {
        Row: {
          applicant_email: string
          applicant_name: string
          applicant_phone: string
          application_status: string | null
          created_at: string
          duration_of_stay: number | null
          id: string
          nationality: string
          passport_number: string
          purpose_of_visit: string | null
          travel_date: string | null
          updated_at: string
          visa_type: string
        }
        Insert: {
          applicant_email: string
          applicant_name: string
          applicant_phone: string
          application_status?: string | null
          created_at?: string
          duration_of_stay?: number | null
          id?: string
          nationality: string
          passport_number: string
          purpose_of_visit?: string | null
          travel_date?: string | null
          updated_at?: string
          visa_type: string
        }
        Update: {
          applicant_email?: string
          applicant_name?: string
          applicant_phone?: string
          application_status?: string | null
          created_at?: string
          duration_of_stay?: number | null
          id?: string
          nationality?: string
          passport_number?: string
          purpose_of_visit?: string | null
          travel_date?: string | null
          updated_at?: string
          visa_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_sitemap_urls: {
        Args: Record<PropertyKey, never>
        Returns: {
          url: string
          lastmod: string
          changefreq: string
          priority: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
