# `defaultTerminateProcess`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-lock.ts` · [README do módulo](../../../../modules/host/host-lock-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494217-494222](../../../../../reference/runtime/host-main.cjs#L494217-L494222) | `FunctionDeclaration` | não | `pid, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494217-494222](../../../../../reference/runtime/host-main.cjs#L494217-L494222) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:494217

Chamadas escritas diretamente neste corpo: `process.kill`.

SHA-256 do trecho: `09f40d2ab225a328412daa650729575f6e81540662381e5969e5bfc21e252b64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
