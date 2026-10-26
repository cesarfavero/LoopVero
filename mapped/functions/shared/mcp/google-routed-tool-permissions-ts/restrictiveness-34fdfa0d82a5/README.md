# `restrictiveness`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687157-687159](../../../../../../reference/runtime/host-main.cjs#L687157-L687159) | `FunctionDeclaration` | não | `permission` |
| [evaluation:579278-579280](../../../../../../reference/runtime/sand-eval-runner.cjs#L579278-L579280) | `FunctionDeclaration` | não | `permission` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687157-687159](../../../../../../reference/runtime/host-main.cjs#L687157-L687159) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579278-579280](../../../../../../reference/runtime/sand-eval-runner.cjs#L579278-L579280) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687157

Chamadas escritas diretamente neste corpo: `SAND_STORED_TOOL_PERMISSIONS.indexOf`.

SHA-256 do trecho: `cda187d8fe4a5026cd6688a18ac64a0cc543a571be8cf6c010540bda40c2d597`.

### evaluation:579278

Chamadas escritas diretamente neste corpo: `SAND_STORED_TOOL_PERMISSIONS.indexOf`.

SHA-256 do trecho: `cda187d8fe4a5026cd6688a18ac64a0cc543a571be8cf6c010540bda40c2d597`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
