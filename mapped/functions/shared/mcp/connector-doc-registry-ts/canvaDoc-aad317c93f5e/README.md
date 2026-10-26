# `canvaDoc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774195-774198](../../../../../../reference/runtime/host-main.cjs#L774195-L774198) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573410-573413](../../../../../../reference/runtime/sand-eval-runner.cjs#L573410-L573413) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774195-774198](../../../../../../reference/runtime/host-main.cjs#L774195-L774198) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573410-573413](../../../../../../reference/runtime/sand-eval-runner.cjs#L573410-L573413) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774195

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `ae375fd524571b145d8f2d11957c852f12d69e0975472c3690dd08ff305c7c5e`.

### evaluation:573410

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `ae375fd524571b145d8f2d11957c852f12d69e0975472c3690dd08ff305c7c5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
