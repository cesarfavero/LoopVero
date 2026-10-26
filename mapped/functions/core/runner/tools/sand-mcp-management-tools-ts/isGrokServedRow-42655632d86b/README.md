# `isGrokServedRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779710-779712](../../../../../../../reference/runtime/host-main.cjs#L779710-L779712) | `FunctionDeclaration` | não | `row` |
| [evaluation:579948-579950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579948-L579950) | `FunctionDeclaration` | não | `row` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779710-779712](../../../../../../../reference/runtime/host-main.cjs#L779710-L779712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579948-579950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579948-L579950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779710

Chamadas escritas diretamente neste corpo: `row.id.startsWith`.

SHA-256 do trecho: `86992aa4200441efa675284ef1cf40b384764da3fa857a206798c590dc0b1a3d`.

### evaluation:579948

Chamadas escritas diretamente neste corpo: `row.id.startsWith`.

SHA-256 do trecho: `86992aa4200441efa675284ef1cf40b384764da3fa857a206798c590dc0b1a3d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
