# `gateRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557649-557651](../../../../../../reference/runtime/host-main.cjs#L557649-L557651) | `FunctionDeclaration` | não | `facts, gate` |
| [evaluation:546096-546098](../../../../../../reference/runtime/sand-eval-runner.cjs#L546096-L546098) | `FunctionDeclaration` | não | `facts, gate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557649-557651](../../../../../../reference/runtime/host-main.cjs#L557649-L557651) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546096-546098](../../../../../../reference/runtime/sand-eval-runner.cjs#L546096-L546098) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557649

Chamadas escritas diretamente neste corpo: `isSandUiMapGateName`.

SHA-256 do trecho: `60a8410e4506ebbc2f059cfcc0b1874d7718eaa319fc50df9ff58102cc9d9e90`.

### evaluation:546096

Chamadas escritas diretamente neste corpo: `isSandUiMapGateName`.

SHA-256 do trecho: `60a8410e4506ebbc2f059cfcc0b1874d7718eaa319fc50df9ff58102cc9d9e90`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
