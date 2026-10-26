# `documentIdOfEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/documents/document-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776448-776452](../../../../../../../../reference/runtime/host-main.cjs#L776448-L776452) | `FunctionDeclaration` | não | `path33` |
| [evaluation:576099-576103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576099-L576103) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776448-776452](../../../../../../../../reference/runtime/host-main.cjs#L776448-L776452) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576099-576103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576099-L576103) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:776448

Chamadas escritas diretamente neste corpo: `DOCUMENT_ID_PATTERN.test`, `path33.replace`, `trimmed.lastIndexOf`, `trimmed.slice`.

SHA-256 do trecho: `ad4ed8af2c6256d5b2bda36c8dcd905def38afe22cc591dc9cd0e0ac9a3fb82a`.

### evaluation:576099

Chamadas escritas diretamente neste corpo: `DOCUMENT_ID_PATTERN.test`, `path33.replace`, `trimmed.lastIndexOf`, `trimmed.slice`.

SHA-256 do trecho: `ad4ed8af2c6256d5b2bda36c8dcd905def38afe22cc591dc9cd0e0ac9a3fb82a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
