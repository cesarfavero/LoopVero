# `boundedInt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512382-512386](../../../../../../reference/runtime/sand-eval-runner.cjs#L512382-L512386) | `FunctionDeclaration` | não | `raw, max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512382-512386](../../../../../../reference/runtime/sand-eval-runner.cjs#L512382-L512386) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512382

Chamadas escritas diretamente neste corpo: `Number`, `Number.isInteger`.

SHA-256 do trecho: `9c353c8a29413e7b3a2a1327f4b4c2ea35d016b3aa22d330b8d954637b9550bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
