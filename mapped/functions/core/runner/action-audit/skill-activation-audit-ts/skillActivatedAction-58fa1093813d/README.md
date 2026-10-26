# `skillActivatedAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/action-audit/skill-activation-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/skill-activation-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534919-534928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534919-L534928) | `FunctionDeclaration` | não | `options2, catalog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534919-534928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534919-L534928) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:534919

Chamadas escritas diretamente neste corpo: `options2.skillId.trim`, `skillActivationSource`, `skillActivationTrigger`.

SHA-256 do trecho: `ff264983c584303a28467dceba7396815959ee45d9c077b5c47efcb51cd58f5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
