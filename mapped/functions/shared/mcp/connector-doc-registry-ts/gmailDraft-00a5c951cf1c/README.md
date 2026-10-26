# `gmailDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774214-774217](../../../../../../reference/runtime/host-main.cjs#L774214-L774217) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573429-573432](../../../../../../reference/runtime/sand-eval-runner.cjs#L573429-L573432) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774214-774217](../../../../../../reference/runtime/host-main.cjs#L774214-L774217) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573429-573432](../../../../../../reference/runtime/sand-eval-runner.cjs#L573429-L573432) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774214

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `1b3f7fb39c94f8306fc02f446b755a9ac3d651565d8691ffd7c4b597441e3546`.

### evaluation:573429

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `1b3f7fb39c94f8306fc02f446b755a9ac3d651565d8691ffd7c4b597441e3546`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
