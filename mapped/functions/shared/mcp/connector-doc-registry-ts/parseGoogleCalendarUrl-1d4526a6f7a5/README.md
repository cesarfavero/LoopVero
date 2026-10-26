# `parseGoogleCalendarUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774218-774229](../../../../../../reference/runtime/host-main.cjs#L774218-L774229) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573433-573444](../../../../../../reference/runtime/sand-eval-runner.cjs#L573433-L573444) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774218-774229](../../../../../../reference/runtime/host-main.cjs#L774218-L774229) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573433-573444](../../../../../../reference/runtime/sand-eval-runner.cjs#L573433-L573444) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:774218

Chamadas escritas diretamente neste corpo: `eid.replaceAll`, `encodeURIComponent`, `matching`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 do trecho: `02df8d77e25be6a8d3f85e02b6c2e704c645ff458b6c72d96dfb0925e7db307f`.

### evaluation:573433

Chamadas escritas diretamente neste corpo: `eid.replaceAll`, `encodeURIComponent`, `matching`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 do trecho: `02df8d77e25be6a8d3f85e02b6c2e704c645ff458b6c72d96dfb0925e7db307f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
