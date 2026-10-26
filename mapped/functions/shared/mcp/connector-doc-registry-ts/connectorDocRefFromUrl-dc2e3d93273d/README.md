# `connectorDocRefFromUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774499-774503](../../../../../../reference/runtime/host-main.cjs#L774499-L774503) | `FunctionDeclaration` | não | `connector, raw` |
| [evaluation:573735-573739](../../../../../../reference/runtime/sand-eval-runner.cjs#L573735-L573739) | `FunctionDeclaration` | não | `connector, raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774499-774503](../../../../../../reference/runtime/host-main.cjs#L774499-L774503) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573735-573739](../../../../../../reference/runtime/sand-eval-runner.cjs#L573735-L573739) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774499

Chamadas escritas diretamente neste corpo: `parse17`, `parseHttpsUrl`, `toRef`.

SHA-256 do trecho: `f528d34aaed8638ea74000ff9d5a5b0dbce81e0636f2fcd741b17cd07dfd6a0c`.

### evaluation:573735

Chamadas escritas diretamente neste corpo: `parse16`, `parseHttpsUrl`, `toRef`.

SHA-256 do trecho: `5833bf5c84705d01923685e08b4bbcc9eca005d6d3b379789c35617f60db672a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
