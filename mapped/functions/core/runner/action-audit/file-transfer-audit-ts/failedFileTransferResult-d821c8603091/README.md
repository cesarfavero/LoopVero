# `failedFileTransferResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/file-transfer-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770398-770411](../../../../../../../reference/runtime/host-main.cjs#L770398-L770411) | `FunctionDeclaration` | não | `error64` |
| [evaluation:569169-569182](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569169-L569182) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770398-770411](../../../../../../../reference/runtime/host-main.cjs#L770398-L770411) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:569169-569182](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569169-L569182) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:770398

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `isLocalToolRefusal`.

Alvos de atribuição ou incremento: `innermost`.

SHA-256 do trecho: `dc69bc6b631a5552281727a52267d4d554c71095590a21e99a2db291d3b52f3c`.

### evaluation:569169

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `isLocalToolRefusal`.

Alvos de atribuição ou incremento: `innermost`.

SHA-256 do trecho: `dee5dcb9f7ccb94e25480f21a374e59d058fea1bef1ff7334e13bcdae52cbfdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
