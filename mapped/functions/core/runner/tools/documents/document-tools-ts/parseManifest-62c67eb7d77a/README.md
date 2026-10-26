# `parseManifest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/documents/document-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:576091-576098](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576091-L576098) | `FunctionDeclaration` | não | `json3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:576091-576098](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576091-L576098) | 1 | 0 | 0 | 2 | 0 | 1 |

### evaluation:576091

Chamadas escritas diretamente neste corpo: `JSON.parse`, `manifestSchema.safeParse`.

SHA-256 do trecho: `f4024efb04f3d1300c534a6ddf4fc207922057a18fece075b5537ec8e5e10dcd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
