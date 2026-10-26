# `listPageTargetsOnPort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547072-547116](../../../../../../../reference/runtime/host-main.cjs#L547072-L547116) | `FunctionDeclaration` | sim | `port, fetchImpl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547072-547116](../../../../../../../reference/runtime/host-main.cjs#L547072-L547116) | 6 | 1 | 1 | 5 | 0 | 1 |

### host:547072

Chamadas escritas diretamente neste corpo: `Array.isArray`, `cdpDeadline.run`, `cdpTargetSchema.safeParse`, `findSystemErrno`, `new Error`, `targets.push`, `trustedDebuggerUrl`.

SHA-256 do trecho: `6ca25ff6ddf90f1cfa16debf0992e0eb2cb1d81863f39fef2a787d437ed121b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
