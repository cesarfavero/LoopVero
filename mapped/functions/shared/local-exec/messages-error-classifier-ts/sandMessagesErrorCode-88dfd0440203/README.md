# `sandMessagesErrorCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/local-exec/messages-error-classifier.ts` · [README do módulo](../../../../../modules/shared/local-exec/messages-error-classifier-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770374-770382](../../../../../../reference/runtime/host-main.cjs#L770374-L770382) | `FunctionDeclaration` | não | `error64` |
| [evaluation:569082-569090](../../../../../../reference/runtime/sand-eval-runner.cjs#L569082-L569090) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770374-770382](../../../../../../reference/runtime/host-main.cjs#L770374-L770382) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:569082-569090](../../../../../../reference/runtime/sand-eval-runner.cjs#L569082-L569090) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:770374

Chamadas escritas diretamente neste corpo: `CODE_BY_LABELLED_SUFFIX.find`, `CODE_BY_MESSAGE.get`, `SAND_MESSAGES_ERROR_CODES.find`.

SHA-256 do trecho: `7f0d464b7f235ad2750a19ded4a935b5cc0cf7ee6b2d7614a005402f41bd09bd`.

### evaluation:569082

Chamadas escritas diretamente neste corpo: `CODE_BY_LABELLED_SUFFIX.find`, `CODE_BY_MESSAGE.get`, `SAND_MESSAGES_ERROR_CODES.find`.

SHA-256 do trecho: `fb5591501a32eab0e446691a10edf845a112796718db6e7cc9241a0f4beb60b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
