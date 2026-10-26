# `withTitleHeading`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/documents/document-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776418-776428](../../../../../../../../reference/runtime/host-main.cjs#L776418-L776428) | `FunctionDeclaration` | não | `title, markdown` |
| [evaluation:576069-576079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576069-L576079) | `FunctionDeclaration` | não | `title, markdown` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776418-776428](../../../../../../../../reference/runtime/host-main.cjs#L776418-L776428) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576069-576079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576069-L576079) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:776418

Chamadas escritas diretamente neste corpo: `/^#\s+/.test`, `lines2.findIndex`, `lines2.join`, `markdown.replace`, `markdown.split`.

Alvos de atribuição ou incremento: `lines2[computed]`.

SHA-256 do trecho: `89006de384305ad19a488464e9070db2c1ee2f60cb3262e2d41b94cc789266bd`.

### evaluation:576069

Chamadas escritas diretamente neste corpo: `/^#\s+/.test`, `lines2.findIndex`, `lines2.join`, `markdown.replace`, `markdown.split`.

Alvos de atribuição ou incremento: `lines2[computed]`.

SHA-256 do trecho: `89006de384305ad19a488464e9070db2c1ee2f60cb3262e2d41b94cc789266bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
