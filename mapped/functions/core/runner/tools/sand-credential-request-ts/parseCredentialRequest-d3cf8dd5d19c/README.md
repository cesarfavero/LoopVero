# `parseCredentialRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-request.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725478-725516](../../../../../../../reference/runtime/host-main.cjs#L725478-L725516) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725478-725516](../../../../../../../reference/runtime/host-main.cjs#L725478-L725516) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:725478

Chamadas escritas diretamente neste corpo: `brokeredCredentialRequestSchema.safeParse`, `clampCredentialPurpose`, `credentialRequestSchema.safeParse`, `normalizeCredentialTarget`.

SHA-256 do trecho: `b326fd6db6ffcaac4c030a02975954267f8e74147dfd59db8a32f219363c6262`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
