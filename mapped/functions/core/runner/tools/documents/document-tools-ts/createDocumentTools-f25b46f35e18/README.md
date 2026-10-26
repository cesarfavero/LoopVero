# `createDocumentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/documents/document-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776453-776613](../../../../../../../../reference/runtime/host-main.cjs#L776453-L776613) | `FunctionDeclaration` | não | `{   port,   readBoxFile,   view = "owner" }` |
| [evaluation:576104-576264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576104-L576264) | `FunctionDeclaration` | não | `{   port,   readBoxFile,   view = "owner" }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776453-776613](../../../../../../../../reference/runtime/host-main.cjs#L776453-L776613) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576104-576264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576104-L576264) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776453

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`.

SHA-256 do trecho: `742b12fd4f4e942030c7f0f097db286e8b8039f897f7c2eaccd69defcd136a38`.

### evaluation:576104

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`.

SHA-256 do trecho: `19c39d3e417e2de2ac531c401290def8c1b6554406d01ab592c93dd8082ab934`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
