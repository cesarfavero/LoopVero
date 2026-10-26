# `parseMicrosoftUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774020-774037](../../../../../../reference/runtime/host-main.cjs#L774020-L774037) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573235-573252](../../../../../../reference/runtime/sand-eval-runner.cjs#L573235-L573252) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774020-774037](../../../../../../reference/runtime/host-main.cjs#L774020-L774037) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:573235-573252](../../../../../../reference/runtime/sand-eval-runner.cjs#L573235-L573252) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:774020

Chamadas escritas diretamente neste corpo: `encodeURIComponent`, `hostname4.endsWith`, `isHostOf`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 do trecho: `93f6121d677241a85f6f0595f9c07bb1b595915618ccb6902542a29e10a0000c`.

### evaluation:573235

Chamadas escritas diretamente neste corpo: `encodeURIComponent`, `hostname3.endsWith`, `isHostOf`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 do trecho: `de83cda0297d4426b9d4477100774ad7a73c4d5b8a3683486d3971c2ee1de305`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
