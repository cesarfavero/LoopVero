# `parseFigmaUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774051-774058](../../../../../../reference/runtime/host-main.cjs#L774051-L774058) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573266-573273](../../../../../../reference/runtime/sand-eval-runner.cjs#L573266-L573273) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774051-774058](../../../../../../reference/runtime/host-main.cjs#L774051-L774058) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573266-573273](../../../../../../reference/runtime/sand-eval-runner.cjs#L573266-L573273) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:774051

Chamadas escritas diretamente neste corpo: `FIGMA_EDITORS.get`, `isHostOf`, `matching`, `segmentsOf`.

SHA-256 do trecho: `c0c53b1aeb39e1237947b3413803a992b7f81f777ede3c88b693392b03e02456`.

### evaluation:573266

Chamadas escritas diretamente neste corpo: `FIGMA_EDITORS.get`, `isHostOf`, `matching`, `segmentsOf`.

SHA-256 do trecho: `c0c53b1aeb39e1237947b3413803a992b7f81f777ede3c88b693392b03e02456`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
