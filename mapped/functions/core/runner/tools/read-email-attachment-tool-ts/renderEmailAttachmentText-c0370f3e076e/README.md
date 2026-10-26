# `renderEmailAttachmentText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-email-attachment-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-email-attachment-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764943-764956](../../../../../../../reference/runtime/host-main.cjs#L764943-L764956) | `FunctionDeclaration` | não | `attachment, text3, truncated` |
| [evaluation:558311-558324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558311-L558324) | `FunctionDeclaration` | não | `attachment, text3, truncated` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764943-764956](../../../../../../../reference/runtime/host-main.cjs#L764943-L764956) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558311-558324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558311-L558324) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764943

Chamadas escritas diretamente neste corpo: `Math.round`, `describe3`, `lines2.join`, `lines2.push`, `text3.trimEnd`.

SHA-256 do trecho: `fd31157ebc774729ab9925631422bf9acc272d92d31083d0788487d34cf4a16b`.

### evaluation:558311

Chamadas escritas diretamente neste corpo: `Math.round`, `describe3`, `lines2.join`, `lines2.push`, `text3.trimEnd`.

SHA-256 do trecho: `fd31157ebc774729ab9925631422bf9acc272d92d31083d0788487d34cf4a16b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
