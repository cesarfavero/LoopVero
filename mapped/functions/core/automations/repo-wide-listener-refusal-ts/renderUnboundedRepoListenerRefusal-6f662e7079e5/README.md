# `renderUnboundedRepoListenerRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/repo-wide-listener-refusal.ts` · [README do módulo](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762023-762028](../../../../../../reference/runtime/host-main.cjs#L762023-L762028) | `FunctionDeclaration` | não | `{   listener,   firehoseKinds }` |
| [evaluation:554601-554606](../../../../../../reference/runtime/sand-eval-runner.cjs#L554601-L554606) | `FunctionDeclaration` | não | `{   listener,   firehoseKinds }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762023-762028](../../../../../../reference/runtime/host-main.cjs#L762023-L762028) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554601-554606](../../../../../../reference/runtime/sand-eval-runner.cjs#L554601-L554606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762023

Chamadas escritas diretamente neste corpo: `firehoseKinds.join`.

SHA-256 do trecho: `8b948dc880163a7fe66c2903bff88d6a635ef659b14c3d10f2aed1eab2ad1614`.

### evaluation:554601

Chamadas escritas diretamente neste corpo: `firehoseKinds.join`.

SHA-256 do trecho: `8b948dc880163a7fe66c2903bff88d6a635ef659b14c3d10f2aed1eab2ad1614`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
