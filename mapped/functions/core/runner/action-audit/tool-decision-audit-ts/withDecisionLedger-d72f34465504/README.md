# `withDecisionLedger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489776-489778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489776-L489778) | `FunctionDeclaration` | não | `ctx, audit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489776-489778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489776-L489778) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489776

Chamadas escritas diretamente neste corpo: `.with`, `ctx.with`.

SHA-256 do trecho: `91d40bae96e128616da815d1845a91e89800f236e7692f7ea5931e43e749ece0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
