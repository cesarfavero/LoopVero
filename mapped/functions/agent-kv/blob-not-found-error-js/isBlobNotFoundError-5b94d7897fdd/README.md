# `isBlobNotFoundError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-not-found-error.js` · [README do módulo](../../../../modules/agent-kv/blob-not-found-error-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616387-616389](../../../../../reference/runtime/host-main.cjs#L616387-L616389) | `FunctionDeclaration` | não | `error64` |
| [evaluation:284927-284929](../../../../../reference/runtime/sand-eval-runner.cjs#L284927-L284929) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616387-616389](../../../../../reference/runtime/host-main.cjs#L616387-L616389) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284927-284929](../../../../../reference/runtime/sand-eval-runner.cjs#L284927-L284929) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616387

Chamadas escritas diretamente neste corpo: `findBlobNotFoundError`.

SHA-256 do trecho: `479ae4ed0ee68a261881f94409ad1bb48336832d7237cbad603aa170afcb38bf`.

### evaluation:284927

Chamadas escritas diretamente neste corpo: `findBlobNotFoundError`.

SHA-256 do trecho: `11134a65afad4000c584e4f3af61fa0d81376184225a521cb1632ee4b419d9f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
