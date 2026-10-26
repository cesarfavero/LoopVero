# `messageLooksTransient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736210-736213](../../../../../../reference/runtime/host-main.cjs#L736210-L736213) | `FunctionDeclaration` | não | `message` |
| [evaluation:589891-589894](../../../../../../reference/runtime/sand-eval-runner.cjs#L589891-L589894) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736210-736213](../../../../../../reference/runtime/host-main.cjs#L736210-L736213) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589891-589894](../../../../../../reference/runtime/sand-eval-runner.cjs#L589891-L589894) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736210

Chamadas escritas diretamente neste corpo: `TRANSIENT_MESSAGE_TOKENS.some`, `message.toLowerCase`.

SHA-256 do trecho: `1f6a986cbe0250988e2c57002d52d96cd53754ed09cea35af379c7b686c6efde`.

### evaluation:589891

Chamadas escritas diretamente neste corpo: `TRANSIENT_MESSAGE_TOKENS.some`, `message.toLowerCase`.

SHA-256 do trecho: `1f6a986cbe0250988e2c57002d52d96cd53754ed09cea35af379c7b686c6efde`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
