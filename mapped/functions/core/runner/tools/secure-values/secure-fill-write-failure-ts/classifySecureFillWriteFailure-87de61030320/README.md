# `classifySecureFillWriteFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-write-failure.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-write-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724155-724165](../../../../../../../../reference/runtime/host-main.cjs#L724155-L724165) | `FunctionDeclaration` | não | `driverError` |
| [evaluation:560049-560059](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560049-L560059) | `FunctionDeclaration` | não | `driverError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724155-724165](../../../../../../../../reference/runtime/host-main.cjs#L724155-L724165) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560049-560059](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560049-L560059) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:724155

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_ERROR.exec`, `causeIn`, `isDriverCall`, `isErrorName`.

SHA-256 do trecho: `1b6f815cec78155698d698479faf3f6f6fe2eec0b659eb42510e67708d4417aa`.

### evaluation:560049

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_ERROR.exec`, `causeIn`, `isDriverCall`, `isErrorName`.

SHA-256 do trecho: `3842a0e490f591744490adee2a712b51aa539e784ec4b1e6a70611b3ee42346d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
