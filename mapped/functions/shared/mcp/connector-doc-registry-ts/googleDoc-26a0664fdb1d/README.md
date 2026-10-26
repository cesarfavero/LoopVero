# `googleDoc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773997-774005](../../../../../../reference/runtime/host-main.cjs#L773997-L774005) | `FunctionDeclaration` | não | `editor, raw` |
| [evaluation:573212-573220](../../../../../../reference/runtime/sand-eval-runner.cjs#L573212-L573220) | `FunctionDeclaration` | não | `editor, raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773997-774005](../../../../../../reference/runtime/host-main.cjs#L773997-L774005) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573212-573220](../../../../../../reference/runtime/sand-eval-runner.cjs#L573212-L573220) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:773997

Chamadas escritas diretamente neste corpo: `GOOGLE_EDITORS.get`, `matching`, `raw.trim`.

SHA-256 do trecho: `5179d0dcaefacd5822c70081dc3cf1debdafb6408faa5657f334563cd82a0ca7`.

### evaluation:573212

Chamadas escritas diretamente neste corpo: `GOOGLE_EDITORS.get`, `matching`, `raw.trim`.

SHA-256 do trecho: `5179d0dcaefacd5822c70081dc3cf1debdafb6408faa5657f334563cd82a0ca7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
