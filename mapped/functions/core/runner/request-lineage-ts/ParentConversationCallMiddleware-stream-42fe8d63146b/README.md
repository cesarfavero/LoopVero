# `ParentConversationCallMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/request-lineage.ts` · [README do módulo](../../../../../modules/core/runner/request-lineage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534800-534802](../../../../../../reference/runtime/sand-eval-runner.cjs#L534800-L534802) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534800-534802](../../../../../../reference/runtime/sand-eval-runner.cjs#L534800-L534802) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534800

Chamadas escritas diretamente neste corpo: `bindParentConversationCall`, `this.innerExecutor.stream`.

SHA-256 do trecho: `ea91a8a82e07b68396c87eca33b1fb6fdb4904324cc9179ef51413a8bc4b0967`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
