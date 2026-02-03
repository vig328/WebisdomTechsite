export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      ai_chat_messages: {
        Row: {
          application_id: string | null
          content: string
          created_at: string | null
          id: string
          role: string
          stage: number | null
          user_id: string
        }
        Insert: {
          application_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          role: string
          stage?: number | null
          user_id: string
        }
        Update: {
          application_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          role?: string
          stage?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          industry: string | null
          message: string | null
          name: string
          phone: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          industry?: string | null
          message?: string | null
          name: string
          phone?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          industry?: string | null
          message?: string | null
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      "Contact Form Submission": {
        Row: {
          "Additional Message": string | null
          "Company Name": string | null
          Date: string | null
          email: string
          "full name": string
          Interest: string | null
          Time: string | null
        }
        Insert: {
          "Additional Message"?: string | null
          "Company Name"?: string | null
          Date?: string | null
          email: string
          "full name": string
          Interest?: string | null
          Time?: string | null
        }
        Update: {
          "Additional Message"?: string | null
          "Company Name"?: string | null
          Date?: string | null
          email?: string
          "full name"?: string
          Interest?: string | null
          Time?: string | null
        }
        Relationships: []
      }
      demo_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          application_id: string
          created_at: string | null
          document_type: Database["public"]["Enums"]["document_type"]
          file_name: string
          file_size: number | null
          file_url: string
          id: string
          is_coapplicant: boolean | null
          mime_type: string | null
          ocr_data: Json | null
          processed_at: string | null
          status: Database["public"]["Enums"]["document_status"] | null
          updated_at: string | null
          uploaded_at: string | null
          validation_data: Json | null
        }
        Insert: {
          application_id: string
          created_at?: string | null
          document_type: Database["public"]["Enums"]["document_type"]
          file_name: string
          file_size?: number | null
          file_url: string
          id?: string
          is_coapplicant?: boolean | null
          mime_type?: string | null
          ocr_data?: Json | null
          processed_at?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          updated_at?: string | null
          uploaded_at?: string | null
          validation_data?: Json | null
        }
        Update: {
          application_id?: string
          created_at?: string | null
          document_type?: Database["public"]["Enums"]["document_type"]
          file_name?: string
          file_size?: number | null
          file_url?: string
          id?: string
          is_coapplicant?: boolean | null
          mime_type?: string | null
          ocr_data?: Json | null
          processed_at?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          updated_at?: string | null
          uploaded_at?: string | null
          validation_data?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      form_submissions: {
        Row: {
          accommodation_needs: string | null
          city: string | null
          confirmation_id: string
          created_at: string
          email: string | null
          file_url: string | null
          founder_names: string | null
          funding_raised: string | null
          how_did_you_hear: string | null
          id: string
          linkedin_profile: string | null
          message: string | null
          monthly_revenue: string | null
          name: string | null
          phone: string | null
          pitch_deck_url: string | null
          session_id: string
          stage: string | null
          startup_name: string | null
          submission_type: string
          support_ask: string | null
          terms_accepted: boolean | null
          traction_metrics: string | null
          updated_at: string
          workshop: string | null
        }
        Insert: {
          accommodation_needs?: string | null
          city?: string | null
          confirmation_id: string
          created_at?: string
          email?: string | null
          file_url?: string | null
          founder_names?: string | null
          funding_raised?: string | null
          how_did_you_hear?: string | null
          id?: string
          linkedin_profile?: string | null
          message?: string | null
          monthly_revenue?: string | null
          name?: string | null
          phone?: string | null
          pitch_deck_url?: string | null
          session_id?: string
          stage?: string | null
          startup_name?: string | null
          submission_type: string
          support_ask?: string | null
          terms_accepted?: boolean | null
          traction_metrics?: string | null
          updated_at?: string
          workshop?: string | null
        }
        Update: {
          accommodation_needs?: string | null
          city?: string | null
          confirmation_id?: string
          created_at?: string
          email?: string | null
          file_url?: string | null
          founder_names?: string | null
          funding_raised?: string | null
          how_did_you_hear?: string | null
          id?: string
          linkedin_profile?: string | null
          message?: string | null
          monthly_revenue?: string | null
          name?: string | null
          phone?: string | null
          pitch_deck_url?: string | null
          session_id?: string
          stage?: string | null
          startup_name?: string | null
          submission_type?: string
          support_ask?: string | null
          terms_accepted?: boolean | null
          traction_metrics?: string | null
          updated_at?: string
          workshop?: string | null
        }
        Relationships: []
      }
      loan_applications: {
        Row: {
          created_at: string | null
          credit_data: Json | null
          current_stage: number | null
          document_data: Json | null
          employment_type: Database["public"]["Enums"]["employment_type"] | null
          has_coapplicant: boolean | null
          id: string
          loan_solution: Json | null
          loan_type: Database["public"]["Enums"]["loan_type"] | null
          ocr_data: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          credit_data?: Json | null
          current_stage?: number | null
          document_data?: Json | null
          employment_type?:
            | Database["public"]["Enums"]["employment_type"]
            | null
          has_coapplicant?: boolean | null
          id?: string
          loan_solution?: Json | null
          loan_type?: Database["public"]["Enums"]["loan_type"] | null
          ocr_data?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          credit_data?: Json | null
          current_stage?: number | null
          document_data?: Json | null
          employment_type?:
            | Database["public"]["Enums"]["employment_type"]
            | null
          has_coapplicant?: boolean | null
          id?: string
          loan_solution?: Json | null
          loan_type?: Database["public"]["Enums"]["loan_type"] | null
          ocr_data?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ocr_results: {
        Row: {
          application_id: string | null
          created_at: string | null
          document_id: string | null
          document_type: string | null
          file_url: string | null
          id: string
          ocr_json: Json | null
          summary: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string | null
          document_id?: string | null
          document_type?: string | null
          file_url?: string | null
          id?: string
          ocr_json?: Json | null
          summary?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string | null
          document_id?: string | null
          document_type?: string | null
          file_url?: string | null
          id?: string
          ocr_json?: Json | null
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ocr_results_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      document_status:
        | "pending"
        | "processing"
        | "validated"
        | "rejected"
        | "needs_review"
      document_type:
        | "government_id"
        | "address_proof"
        | "salary_slip"
        | "bank_statement"
        | "application_form"
        | "form_16"
        | "itr"
        | "photo"
        | "gst_certificate"
        | "business_proof"
        | "financial_statement"
        | "property_document"
        | "builder_document"
        | "vehicle_document"
        | "driving_licence"
        | "ca_certificate"
      employment_type: "salaried" | "self_employed"
      loan_type:
        | "salaried_personal"
        | "salaried_car"
        | "self_employed"
        | "home_loan"
        | "car_loan"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      document_status: [
        "pending",
        "processing",
        "validated",
        "rejected",
        "needs_review",
      ],
      document_type: [
        "government_id",
        "address_proof",
        "salary_slip",
        "bank_statement",
        "application_form",
        "form_16",
        "itr",
        "photo",
        "gst_certificate",
        "business_proof",
        "financial_statement",
        "property_document",
        "builder_document",
        "vehicle_document",
        "driving_licence",
        "ca_certificate",
      ],
      employment_type: ["salaried", "self_employed"],
      loan_type: [
        "salaried_personal",
        "salaried_car",
        "self_employed",
        "home_loan",
        "car_loan",
      ],
    },
  },
} as const
