# `formatEmailAttachmentSize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-tool-format.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764135-764140](../../../../../../../reference/runtime/host-main.cjs#L764135-L764140) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:557506-557511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557506-L557511) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764135-764140](../../../../../../../reference/runtime/host-main.cjs#L764135-L764140) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:557506-557511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557506-L557511) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:764135

Chamadas escritas diretamente neste corpo: `.toFixed`, `Number.isFinite`.

SHA-256 do trecho: `54f2376eb72c8b2d4f0efa60faff0143259b1a852108a0afc1ed00d2370da7c7`.

### evaluation:557506

Chamadas escritas diretamente neste corpo: `.toFixed`, `Number.isFinite`.

SHA-256 do trecho: `54f2376eb72c8b2d4f0efa60faff0143259b1a852108a0afc1ed00d2370da7c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
