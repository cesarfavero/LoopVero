# `sourceFromDataRootTree`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/action-audit/skill-activation-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/skill-activation-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534900-534905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534900-L534905) | `FunctionDeclaration` | não | `collapsedPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534900-534905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534900-L534905) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:534900

Chamadas escritas diretamente neste corpo: `collapsedPath.startsWith`.

SHA-256 do trecho: `4320215b1d770a033e62ec6a422bc928a9673b2dfce75961a52d0b12d2782536`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
