# `contentItemOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781773-781786](../../../../../../../../reference/runtime/host-main.cjs#L781773-L781786) | `FunctionDeclaration` | não | `raw` |
| [evaluation:582118-582131](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582118-L582131) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781773-781786](../../../../../../../../reference/runtime/host-main.cjs#L781773-L781786) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:582118-582131](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582118-L582131) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:781773

Chamadas escritas diretamente neste corpo: `Buffer.from`, `contentItem.safeParse`, `new McpImageContent`, `new McpToolResultContentItem`, `new Uint8Array`, `textItem`, `unexpectedOutputText`.

SHA-256 do trecho: `3b34b7f5ed62813fbc2ae1390952906f8d5f30acf7ed00d3cbc38325fd278749`.

### evaluation:582118

Chamadas escritas diretamente neste corpo: `Buffer.from`, `contentItem.safeParse`, `new McpImageContent`, `new McpToolResultContentItem`, `new Uint8Array`, `textItem`, `unexpectedOutputText`.

SHA-256 do trecho: `3b34b7f5ed62813fbc2ae1390952906f8d5f30acf7ed00d3cbc38325fd278749`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
