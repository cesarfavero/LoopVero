# `documentIdFromTitle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/documents/document-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776413-776417](../../../../../../../../reference/runtime/host-main.cjs#L776413-L776417) | `FunctionDeclaration` | não | `title` |
| [evaluation:576064-576068](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576064-L576068) | `FunctionDeclaration` | não | `title` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776413-776417](../../../../../../../../reference/runtime/host-main.cjs#L776413-L776417) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576064-576068](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576064-L576068) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:776413

Chamadas escritas diretamente neste corpo: `.normalize`, `.replace`, `.slice`, `padded.slice`, `title.toLowerCase`.

SHA-256 do trecho: `5cb96c5a2d842e7e252710fac2933cbd3bb6cfceaf10b571c0b9832e7e5aebff`.

### evaluation:576064

Chamadas escritas diretamente neste corpo: `.normalize`, `.replace`, `.slice`, `padded.slice`, `title.toLowerCase`.

SHA-256 do trecho: `5cb96c5a2d842e7e252710fac2933cbd3bb6cfceaf10b571c0b9832e7e5aebff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
