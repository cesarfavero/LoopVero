# `formatMcpAccountLabelForPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226019-226022](../../../../../../reference/runtime/host-main.cjs#L226019-L226022) | `FunctionDeclaration` | não | `rawLabel` |
| [evaluation:495242-495245](../../../../../../reference/runtime/sand-eval-runner.cjs#L495242-L495245) | `FunctionDeclaration` | não | `rawLabel` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226019-226022](../../../../../../reference/runtime/host-main.cjs#L226019-L226022) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495242-495245](../../../../../../reference/runtime/sand-eval-runner.cjs#L495242-L495245) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:226019

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `inert.slice`, `rawLabel.replace`.

SHA-256 do trecho: `bffd16003ed02199246e193d206f6b86ea35b25ea45371e705707d059d3d1aed`.

### evaluation:495242

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `inert.slice`, `rawLabel.replace`.

SHA-256 do trecho: `bffd16003ed02199246e193d206f6b86ea35b25ea45371e705707d059d3d1aed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
