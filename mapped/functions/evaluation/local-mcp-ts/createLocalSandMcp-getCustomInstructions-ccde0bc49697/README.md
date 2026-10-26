# `createLocalSandMcp/getCustomInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/integrations/README.md).

**Módulo:** `evaluation/local-mcp.ts` · [README do módulo](../../../../modules/evaluation/local-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628173-628178](../../../../../reference/runtime/sand-eval-runner.cjs#L628173-L628178) | `ArrowFunctionExpression` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628173-628178](../../../../../reference/runtime/sand-eval-runner.cjs#L628173-L628178) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628173

Chamadas escritas diretamente neste corpo: `instructions.map`, `lease.getInstructions`, `new Map`.

SHA-256 do trecho: `30bc1ea986f1171c6e0f6e8aed04617aa7e580e2b5f82e9317a85b8a1c731c17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
