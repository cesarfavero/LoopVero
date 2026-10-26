# `asSignedOut`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/signed-out-rejection.ts` · [README do módulo](../../../../../modules/core/mcp/signed-out-rejection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585286-585288](../../../../../../reference/runtime/sand-eval-runner.cjs#L585286-L585288) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585286-585288](../../../../../../reference/runtime/sand-eval-runner.cjs#L585286-L585288) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585286

Chamadas escritas diretamente neste corpo: `new McpError`.

SHA-256 do trecho: `d742522c4ed866edfb678381be0c0d0d33f9f4747b58348e2c2d28efb049991e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
