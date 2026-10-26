# `readChromeProcessSnapshots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/chrome-discovery.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705281-705301](../../../../../../../reference/runtime/host-main.cjs#L705281-L705301) | `FunctionDeclaration` | sim | `procRoot, signal, readProcFile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705281-705301](../../../../../../../reference/runtime/host-main.cjs#L705281-L705301) | 3 | 1 | 2 | 1 | 1 | 1 |

### host:705281

Chamadas escritas diretamente neste corpo: `/^\d+$/.test`, `entry.isDirectory`, `isProcessGoneError`, `processes.push`, `readChromeProcessSnapshot`, `signal.throwIfAborted`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `3cd1a785c64cf32de4359bbb7c441a05c33212fa3f8b6319870657d9c9994b1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
