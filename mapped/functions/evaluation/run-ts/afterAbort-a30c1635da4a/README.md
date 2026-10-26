# `afterAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630217-630222](../../../../../reference/runtime/sand-eval-runner.cjs#L630217-L630222) | `FunctionDeclaration` | não | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630217-630222](../../../../../reference/runtime/sand-eval-runner.cjs#L630217-L630222) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:630217

Chamadas escritas diretamente neste corpo: `new Promise`.

SHA-256 do trecho: `5fa2a17ee08b7dd12607db2b79658fbf801d423871eff0262d2d057c2c753c76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
