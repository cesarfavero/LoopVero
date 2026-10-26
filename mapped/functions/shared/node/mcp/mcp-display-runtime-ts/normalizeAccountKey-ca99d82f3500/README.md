# `normalizeAccountKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-display-runtime.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-display-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685082-685088](../../../../../../../reference/runtime/host-main.cjs#L685082-L685088) | `FunctionDeclaration` | não | `rawAccountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685082-685088](../../../../../../../reference/runtime/host-main.cjs#L685082-L685088) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685082

Chamadas escritas diretamente neste corpo: `new SandMcpConfigError`, `normalizeMcpAccountLabel`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `f50202008c5316acb04fb73937719678cb5d6c3537614e49812848c002355658`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
