# `createDelegationAuditor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512285-512313](../../../../../../reference/runtime/sand-eval-runner.cjs#L512285-L512313) | `FunctionDeclaration` | não | `auditor, identity2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512285-512313](../../../../../../reference/runtime/sand-eval-runner.cjs#L512285-L512313) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512285

Chamadas escritas diretamente neste corpo: `new Set`.

SHA-256 do trecho: `f51b8a31bb7d9ea449238be18d068c0fa4c415098a410cf15e402381ad6b83a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
